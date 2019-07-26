import React, { useState, useEffect } from 'react';

import axios from 'axios';

const FundraisingPageCard = ({id}) => {

  let content = null;
  
  const [frp, setFrp] = useState();

  useEffect(() => {
    fetchCardData();
  });

  const fetchCardData = async () => {
    let res = await axios.get(`https://mycause.com.au/api/frp/${id}`);
    if (res) {
      setFrp(res)
    }
  }

  if (frp) {
    content = (
      <div>
        <h1>{frp.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: frp.description }} />
        <img alt="kitten invite" width="300" src={frp.cover_image} />
      </div>
    )
  } else {
    content = null 
  }

  return content
}

export default FundraisingPageCard;
