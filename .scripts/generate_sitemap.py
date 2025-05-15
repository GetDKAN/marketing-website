# .scripts/generate_sitemap.py
import os
import subprocess
import yaml
from datetime import datetime, timezone
from urllib.parse import quote

def load_config(path="sitemap.yml"):
    with open(path, "r") as f:
        return yaml.safe_load(f)

config = load_config()

BASE_URL = config["base_url"]
OUTPUT_FILE = config.get("output_file", "sitemap.xml")
XSL_FILE = config.get("xsl_file", "sitemap.xsl")
EXCLUDE = config.get("exclude", [])
ORG_NAME = config.get("organization_name", "Generated Site")
DEFAULT_FREQ = config.get("default_changefreq", "weekly")
DEFAULT_PRIORITY = config.get("default_priority", 0.5)

def find_html_files(base_dir):
    html_files = []
    for root, _, files in os.walk(base_dir):
        for file in files:
            if file.endswith(".html"):
                rel_path = os.path.relpath(os.path.join(root, file), base_dir)
                if any(rel_path.startswith(p) for p in EXCLUDE):
                    continue
                html_files.append(rel_path)
    return html_files

def format_url(path):
    url = "/" + path.replace("index.html", "").replace(os.path.sep, "/")
    return quote(url)

def get_git_last_modified(path):
    try:
        result = subprocess.run(
            ["git", "log", "-1", "--format=%cI", "--", path],
            stdout=subprocess.PIPE,
            stderr=subprocess.DEVNULL,
            text=True,
            check=True
        )
        return result.stdout.strip()
    except subprocess.CalledProcessError:
        return datetime.now(timezone.utc).isoformat()

def generate_sitemap(base_dir):
    files = find_html_files(base_dir)

    with open(OUTPUT_FILE, "w") as f:
        f.write('<?xml version="1.0" encoding="UTF-8"?>\n')
        f.write(f'<?xml-stylesheet type="text/xsl" href="{XSL_FILE}"?>\n')
        f.write(f'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" organization="{ORG_NAME}">\n')

        for file in sorted(files):
            url = BASE_URL + format_url(file)
            lastmod = get_git_last_modified(file)
            f.write("  <url>\n")
            f.write(f"    <loc>{url}</loc>\n")
            f.write(f"    <lastmod>{lastmod}</lastmod>\n")
            f.write(f"    <changefreq>{DEFAULT_FREQ}</changefreq>\n")
            f.write(f"    <priority>{DEFAULT_PRIORITY}</priority>\n")
            f.write("  </url>\n")

        f.write("</urlset>\n")

    print(f"✅ Sitemap generated: {OUTPUT_FILE} with {len(files)} URLs")

if __name__ == "__main__":
    generate_sitemap(".")
