import React, { useEffect, useRef } from 'react';

let autoComplete;
let completeAdress;

const loadScript = (url, callback) => {
  let script = document.createElement('script');
  script.type = 'text/javascript';

  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState === 'loaded' || script.readyState === 'complete') {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
};

function handleScriptLoad(updateQuery, autoCompleteRef) {
  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    {
      strictBounds: false,
      types: ['establishment'],
      fields: ['address_components', 'geometry', 'icon', 'name'],
      componentRestrictions: { country: 'ke' },
    }
  );
  autoComplete.setFields(['address_components', 'formatted_address']);
  autoComplete.addListener('place_changed', () => {
    console.log(updateQuery);
    return handlePlaceSelect(updateQuery);
  });
}

const formattedAddress = address => {
  const obj = { name: address.name };
  address.address_components.forEach(item => {
    if (item.types[0] !== 'administrative_area_level_1') {
      obj[item.types[0]] = item.long_name;
    }
  });
  return Object.values(obj).join(', ');
};

async function handlePlaceSelect(updateQuery) {
  const addressObject = await autoComplete.getPlace();
  const queryAddress = await addressObject.formatted_address;

  completeAdress = formattedAddress(addressObject);
  updateQuery(queryAddress);
}

function SearchLocationInput({ query, setQuery, setAddress, mapKey }) {
  const autoCompleteRef = useRef(null);

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${mapKey}&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
  }, []);

  useEffect(() => {
    setAddress(completeAdress);
  }, [completeAdress]);

  return (
    <input
      ref={autoCompleteRef}
      onChange={event => setQuery(event.target.value)}
      placeholder='Enter Your Address'
      type='text'
      value={query}
      autoComplete='false'
      className='checkout__input__add'
    />
  );
}

export default SearchLocationInput;
