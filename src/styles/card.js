import styled from "styled-components";

export const Card = styled.div`
    background-color: #FFFFFF;
    padding-top: 32px;
    border: 1px solid #DFE0EB;
    border-radius: 8px;
    box-sizing: border-box;
`;

export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 32px 40px 32px;
    >h3{
        font-weight: 700;
        font-size: 19px;
    }
`;

export const FilterWrapper = styled.div`
    display: flex;
    gap: 30px;
    >div{
        >span{
            margin-left: 10px; 
            font-size: 14px;
            font-weight: 600;
        }  
    }
`;