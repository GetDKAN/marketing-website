import React from 'react'

const SitesTable = props => {
  const heading = props.heading ? props.heading : 'Region Undefined'

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="2">{heading}</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map(row => (
          <tr key={row.title}>
            <td>{row.title}</td>
            <td>
              <a href={row.url} target="_blank" rel="noopener noreferrer">
                {row.url}
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
export default SitesTable
