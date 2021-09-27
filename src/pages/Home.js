import React, { useState } from 'react';
import { Button } from 'antd';
import SearchLocationInput from '../components/Autocomplete';

const mapKey = process.env.REACT_APP_API_KEY;

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
  const [query, setQuery] = useState('');
  const [address, setAddress] = useState('');

  return (
    <div className='bg-grey home-header'>
      <div className='main-container position-relative'>
        <h1>Roof inspections made remote and easy</h1>
        <p>
          Get your roof inspected remotely and connect with our trusted roofers
        </p>

        <div className='search-area'>
          <i className='fas fa-map-marker-alt'></i>
          <SearchLocationInput
            query={query}
            setQuery={setQuery}
            setAddress={setAddress}
            mapKey={mapKey}
            onChange={() => null}
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
