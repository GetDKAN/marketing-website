/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import Wrapper from '../components/Wrapper'
import SEO from '../components/SEO'

import { Text } from '../components/Commons'
import SitesMap from '../components/Map'
import SitesTable from '../components/SitesTable'
import sites from '../../data/sites.json'

const TableWrapper = styled.div`
  padding-top: 20px;
  margin-top: 20px;
  table {
    width: 100%;
  }
  th {
    background: #898989;
    color: white;
  }
  th,
  td {
    text-align: left;
    padding: 4px;
    border-bottom: 1px solid #ddd;
    width: 50%;
  }
`

const Community = props => {
  const groupBy = key => array =>
    array.reduce((objectsByKeyValue, obj) => {
      const value = obj[key]
      objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj)
      return objectsByKeyValue
    }, {})

  const groupByRegion = groupBy('region')
  const region = groupByRegion(sites)
  //console.log(sites)

  return (
    <Layout location={props.location}>
      <SEO title="Community" />
      <Wrapper>
        <h1>Community</h1>
        <Text>
          A partial list of DKAN sites around the world.{' '}
          <a href="https://github.com/GetDKAN/dkan/issues/new">
            Submit an issue
          </a>{' '}
          to add your site to the list.
        </Text>

        <SitesMap />

        <TableWrapper>
          <SitesTable data={region['Multinational']} heading="Multinational" />
        </TableWrapper>

        <TableWrapper>
          <SitesTable
            data={region['United States of America']}
            heading="United States of America"
          />
        </TableWrapper>

        <TableWrapper>
          <SitesTable data={region['Africa']} heading="Africa" />
        </TableWrapper>

        <TableWrapper>
          <SitesTable
            data={region['Asia & Oceania']}
            heading="Asia and Oceania"
          />
        </TableWrapper>

        <TableWrapper>
          <SitesTable data={region['Americas']} heading="Americas" />
        </TableWrapper>

        <TableWrapper>
          <SitesTable data={region['Europe']} heading="Europe" />
        </TableWrapper>
      </Wrapper>
    </Layout>
  )
}

export default Community
