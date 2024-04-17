import React  from 'react';
import { Chart } from 'react-google-charts';
import { useGetList } from '../../hooks/use-get-list';

export const Orientation = () => {
  const { data } = useGetList();

  return (
    <div>
      {data && (
        <Chart
          width={'500px'}
          height={'300px'}
          chartType="PieChart"
          data={[
            ['Orientation', 'Count'],
            ...Object.entries(
              data.reduce((acc, curr) => {
                acc[curr.orientacaoSexual] = (acc[curr.orientacaoSexual] || 0) + 1;
                return acc;
              }, {})
            ),
          ]}
          options={{
            title: 'Candidatos por orientação sexual',

          }}
        />
      )}
    </div>
  );
};
