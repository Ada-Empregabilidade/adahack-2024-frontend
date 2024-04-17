import React from 'react';
import { Chart } from 'react-google-charts';
import { useGetList } from '../../hooks/use-get-list';


export const Race = () => {
  const { data } = useGetList();

  return (
    <div>
      {data && (
        <Chart
          width={'450px'}
          height={'300px'}
          chartType="PieChart"
          data={[
            ['Race', 'Count'],
            ...Object.entries(
              data.reduce((acc, curr) => {
                acc[curr.raca] = (acc[curr.raca] || 0) + 1;
                return acc;
              }, {})
            ),
          ]}
        />
      )}
    </div>
  );
};
