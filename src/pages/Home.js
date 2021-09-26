import React, { useState } from 'react';
import { AutoComplete, Button } from 'antd';
import axios from 'axios';

const services = [
  {
    title: 'Free Inspection',
    icon: 'fas fa-satellite',
  },
  {
    title: 'File a Claim',
    icon: 'far fa-file-alt',
  },
  {
    title: 'Replace or Repair a Roof',
    icon: 'fas fa-tools',
  },
];

export default function Home() {
  const [options, setOptions] = useState([]);

  const onSearch = async searchText => {
    const url = `https://webit-keyword-search.p.rapidapi.com/autosuggest?q=${searchText}&language=en`;
    const { data } = await axios.get(url, {
      headers: {
        'x-rapidapi-host': 'webit-keyword-search.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_API_KEY,
      },
    });

    setOptions(
      !searchText
        ? []
        : data?.data?.results?.map(item => ({ value: item })) || []
    );
  };

  const onSelect = data => {
    console.log('onSelect', data);
  };

  return (
    <div className='bg-grey home-header'>
      <div className='main-container position-relative'>
        <h1>Roof inspections made remote and easy</h1>
        <p>
          Get your roof inspected remotely and connect with our trusted roofers
        </p>
        <div className='search-area'>
          <i className='fas fa-map-marker-alt'></i>
          <AutoComplete
            options={options}
            style={{
              width: 200,
            }}
            onSelect={onSelect}
            onSearch={onSearch}
            placeholder='Enter Your Address'
          />
          <Button type='primary' shape='round'>
            Get Inspection
          </Button>
        </div>
        <div className='bg-blue-dark services position-absolute'>
          {services.map(service => (
            <div className='service-card' key={service.title}>
              <i className={service.icon}></i>
              <h3>{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
