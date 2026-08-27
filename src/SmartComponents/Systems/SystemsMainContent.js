import React from 'react';
import AsyncComponent from '@redhat-cloud-services/frontend-components/AsyncComponent';
import { fetchSystems } from '../../Utilities/api/api';

const SystemsMainContent = () => (
  <AsyncComponent
    appName='inventory'
    scope='inventory'
    module='./SystemsView'
    queryKeyPrefix='patch-systems'
    fetchData={async (params) => {
      const { data, meta } = await fetchSystems(params);
      return { results: data, total: meta?.total_items ?? 0 }
    }}
    columns={(catalog) => [
      catalog.name({ getValue: (item) => ({ displayName: item?.attributes?.display_name }) }),
    ]}
  />
);

export default SystemsMainContent;
