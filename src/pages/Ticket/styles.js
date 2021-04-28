import styled from 'styled-components';

export const Table = styled.table`
    width: 100%;
    @media (max-width: 1100px){
        overflow-x: scroll;
    }
    th, td{
        border-bottom: 1.5px solid #DFE0EB;
        padding-left: 32px;
    }
    th{
        color: #9FA2B4;
        text-align: left;
        padding-bottom: 10px;
    }
    td{
        vertical-align: middle;
    }
    tbody tr{
        &:hover{
            background: rgba(55, 81, 255, .04);
            cursor: pointer;
        }
    }
`;

export const TicketDiv = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    img{
        width: 44px;
        height: 44px;
        border-radius: 50%;
    }
    >div{
        display: flex;
        flex-direction: column;
        margin-left: 24px;
        gap: 10px;
    }
`;

export const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    >h2{
        font-weight: 700;
        font-size: 24px;
        padding: 36px 0 58px 0;
    }
    >div{
        display: flex;
        >img{
            width: 44px;
            height: 44px;
        }
        >div{
            display: flex;
            align-items: center;
            margin-bottom: 27px;
            margin-left: 32px;
            span{
                margin-right: 5px;
            }
        }
    }
    
`;

export const DivIcons = styled.div`
    border-right: 3px solid #DFE0EB;
    height: 20px;
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 36px;

    img{
        width: 16px;
        height: 16px;
        margin-right: 25px;
    }
`;

export const TicketName = styled.span`
    font-weight: 600;
    font-size: 14px;
    color: #252733;
`;

export const TicketDesc = styled.span`
    color: #C5C7CD;
    font-weight: 400;
    font-size: 12px;
`;

export const Priority = styled.span`
    font-weight: 700;
    font-size: 11px;
    background-color: ${({level}) => {
        if(level === "HIGH") return '#F12B2C';
        else if(level === "NORMAL") return '#29CC97';
        else return '#FEC400';
    }};
    color: #FFFFFF;
    padding: 8px 12px 8px 12px;
    border-radius: 100px;
`;

export const TextFormat = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: start;
`;

export const ButtonPagination = styled.button`
    background-color: #FFFFFF;
    border: none;
`;

export const FooterTable = styled.div`
    height: 65px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 40px;
    span{
        font-weight: 400;
        font-size: 14px;
        color: #9FA2B4;
    }
    select{
        margin-left:  10px;
        margin-right:  10px;
        border: none;
        font-weight: 400;
        font-size: 14px;
        color: #4B506D;
    }
`;
