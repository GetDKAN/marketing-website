import React from 'react';
import styled from 'styled-components'

const MarkerWrapper = styled.div`
    position: relative;
    width: 30px;
    height: 30px;
    border-radius: 50% 50% 50% 0;
    background: #0077C0;
    transform: rotate(-45deg);
    left: 50%;
    top: 50%;
    margin: -20px 0 0 -20px;
    z-index: 0;
    &:after {
        content: "";
        width: 14px;
        height: 14px;
        margin: 8px 0 0 8px;
        background: #e6e6e6;
        position: absolute;
        border-radius: 50%;
    }
    span {
        visibility: hidden;
        transform: rotate(45deg);
        width: 120px;
        background-color: black;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;
      
        /* Position the tooltip */
        position: absolute;
        top: 0;
        z-index: 999;
      }
    &:hover span {
        visibility: visible;
    }
`

const Marker = (props) => {
    const { name, id } = props;
    return (
      <MarkerWrapper>
        <div className="tooltip">
            <span>{name}</span>
        </div>
      </MarkerWrapper>
    );
  };

  export default Marker; 