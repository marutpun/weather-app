import styled from 'styled-components';

export const Header = styled.h1`
  margin: 30px 0 20px;
  color: hsl(30, 15%, 32%);
  font-size: 24px;
  font-weight: 700;
  line-height: 33px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  text-align: center;

  @media print, screen and (min-width: 40em) {
    margin: 50px 0 18px;
    font-size: 30px;
    line-height: 40px;
    letter-spacing: 4.5px;
  }
`;

export const Card = styled.div`
  display: flex;
  background: hsl(0, 100%, 100%);
  box-shadow: 0 15px 70px hsl(0, 0%, 0%, 0.1);
`;

export const ColumnImg = styled.figure`
  margin: 0;
  width: 50%;
`;

export const ColumnText = styled.div`
  width: 50%;
`;

export const Img = styled.img`
  display: inline-block;
  vertical-align: middle;
  max-width: 100%;
  height: auto;
  -ms-interpolation-mode: bicubic;
`;

export const Info = styled.div`
  width: 100%;
  box-shadow: none;
  background-color: transparent;
  padding: 20px;
`;

export const Title = styled.h2`
  margin: 0 0 1rem 0;
  color: hsl(30, 15%, 32%);
  font-weight: 700;
  font-size: 21px;
  line-height: 26px;
  letter-spacing: 0.42px;
  text-align: center;
`;


