import React from 'react';
import { Link } from 'react-router-dom';
import LineChart from '../../charts/LineChart01';
import Icon from '../../images/icons_04.svg';
import EditMenu from '../EditMenu';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function DashboardCard02() {


  return (
    <div className="flex flex-col justify-center items-center col-span-full sm:col-span-6 xl:col-span-2 bg-white shadow-2xl border border-slate-200 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-400 duration-300 rounded">
    <div className="px-2 pt-2">
      <header className="mb-2">
        <img className='ml-8 rounded-full' src={Icon} width="32" height="32" alt="Icon 01" />
      </header>
      <h2 className="text-lg font-semibold text-slate-800 mb-2 ml-5">People</h2>
      <div className="text-xs font-semibold text-slate-400 uppercase mb-1">Manage people</div>
      <div className="flex items-start">
        <div className="text-3xl font-bold text-slate-800 mr-2">24,780</div>
      </div>
    </div>
    
  </div>
  );
}

export default DashboardCard02;
