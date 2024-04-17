import React from 'react';
import { Chart } from 'react-google-charts';
import { useGetList } from '../../hooks/use-get-list';
export const Pcd = () => {
  const { data } = useGetList();
  return (
    <div>
      {data && (
        <Chart
          width={'500px'}
          height={'300px'}
          chartType="PieChart"
          options={{
            backgroundColor: 'transparent',
            colors: ['#E67E22','#2980B9' ],
            ariaRoleDescription:"Gráfico mostrando a quantidade de pcds inscritos nas vagas.",
            ariaLabel:"Gráfico de pizza com a quantidade de pcds inscritos nas vagas."
          }}
          data={[
            ['Pcd', 'Count'],
            ...Object.entries(
              data.reduce((acc, curr) => {
                acc[curr.deficiencia] = (acc[curr.deficiencia] || 0) + 1;
                return acc;
              }, {})
            ),
          ]}
        />
      )}
    </div>
  );
};
