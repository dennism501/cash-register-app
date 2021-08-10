import styled from 'styled-components'

export const MainScreen = styled.div`
    height: 397px;
    border: 3px solid #545E75;
    border-radius: 5px;
    margin-top: 60px;
    margin-left: 100px;
`

export const ChargeAmountCapture = styled.div`
    margin: 32px 16px;
    text-align: right;
    font-size: 32px;
    background: #E8EDF4;
`;

export const KeyPadMainHolder = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`;

export const KeyPadHolder = styled.div`
    display:flex;
    flex-wrap: wrap;
    width: 100%;
     border-top: solid 2px #545E75;
`;

export const KeyPadButton = styled.button`
    flex-basis: 33.30%;
    background: #F7F9FC;
    font-size: 20px;
    padding: 20px;
    font-size: 25px;
    text-align: center;
    border: none;
    border-left: solid 2px #545E75;
    border-bottom: solid 2px #545E75;
    &:hover{
        cursor: pointer;
    }
    &:active{
        background: #E3E8EF;
    }
`;
