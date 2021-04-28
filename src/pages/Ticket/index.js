import React, { useEffect, useState } from "react";
import { Card, CardHeader, FilterWrapper } from "../../styles/card.js";
import Container from "../../styles/container.js";
import order from "../../assets/order.svg";
import filter from "../../assets/filter.svg";
import search from "../../assets/search.svg";
import notification from "../../assets/notification.svg";
import user from "../../assets/user.svg";
import points from "../../assets/points.svg";
import arrowLeft from "../../assets/arrowLeft.svg";
import arrowRight from "../../assets/arrowRight.svg";
import { ContainerHeader, Table, DivIcons, TicketName, TicketDesc, Priority, TextFormat, TicketDiv, ButtonPagination, FooterTable } from "./styles";
import axios from "axios";

export default function Ticket() {

  const [tickets, setTickets] = useState([]);

  const [pageNumber, setPageNumber] = useState(1);
  const [ticketNumber, setTicketNumber] = useState(5);

  const [paginatedTickets, setPaginatedTickets] = useState([]);

  const[startIndex, setStartIndex] = useState(0);
  const[endIndex, setEndIndex] = useState(0);

  const handlePrev =()=>{
    if(pageNumber >= 2){
      setPageNumber(pageNumber - 1);
    }
    setTicketNumber(ticketNumber);
  }

  const handleNext =()=>{
    if(pageNumber >= 1){
      setPageNumber(pageNumber + 1);
    }
    setTicketNumber(ticketNumber);
  }

  useEffect(() => {
    async function fetchData(){
      const response = await axios.get('data.json').then(response => response.data.data);
      const initialIndex = (pageNumber * ticketNumber) - ticketNumber;
      let finalIndex;
      if(response.length < (initialIndex + ticketNumber)){
        finalIndex = response.length;
        console.log("IF", finalIndex);
      }else{
        finalIndex = initialIndex + ticketNumber;
        console.log("ELSE", finalIndex);
      }
      const newPaginatedTickets = response.slice(initialIndex, finalIndex);
      console.log(newPaginatedTickets);
      setStartIndex(initialIndex);
      setEndIndex(finalIndex);
      setTickets(response);
      if(newPaginatedTickets.length > 0){
        setPaginatedTickets(newPaginatedTickets);
      }else{
        setPageNumber(pageNumber - 1);
      }
    }
    fetchData();
  }, [ticketNumber, pageNumber]);

  return (
    <Container>
      <ContainerHeader>
        <h2>Tickets</h2>
        <div>
          <DivIcons>
            <img src={search} alt='' />
            <img src={notification} alt='' />
          </DivIcons>
          <div>
            <span>Jones Ferdinand</span>
            <img src={user} alt='' />
          </div>
        </div>
      </ContainerHeader>

      <Card>
        <CardHeader>
          <h3>All Tickets</h3>
          <FilterWrapper>
            <div>
              <img src={order}  alt='' />
              <span>Sort</span>
            </div>
            <div>
              <img src={filter}  alt='' />
              <span>Filter</span>
            </div>
          </FilterWrapper>
        </CardHeader>

        <div>
          <Table>
            <thead>
              <tr>
                <th>Ticket details</th>
                <th>Customer name</th>
                <th>Date</th>
                <th>Priority</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {paginatedTickets.map((ticket, index) => (
                <tr key={index}>
                <td>
                  <TicketDiv>
                    <img src={ticket.photo}  alt='' />
                    <div>
                      <TicketName>{ticket.ticket}</TicketName>
                      <TicketDesc>Updated {ticket.ticket_days} {ticket.ticket_days > 1 ? 'days' : 'day'} ago</TicketDesc>
                    </div>
                  </TicketDiv>
                </td>
                <td>
                  <TextFormat>
                    <TicketName>{ticket.customer_name}</TicketName>
                    <TicketDesc>{ticket.customer_date}</TicketDesc>
                  </TextFormat>
                </td>

                <td>
                  <TextFormat>
                    <TicketName>{ticket.date}</TicketName>
                    <TicketDesc>{ticket.hour}</TicketDesc>
                  </TextFormat>
                </td>

                <td>
                  <Priority level={ticket.priority}>
                    {ticket.priority}
                  </Priority>
                </td>
                <td>
                  <img src={points}  alt='' />
                </td>
              </tr>
              ))}
              
            </tbody>
          </Table>
        </div>
        <FooterTable>
          <span>Rows per page: </span>
          <select name="rows" id="rows" value={ticketNumber} onChange={(e) => setTicketNumber(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
          </select>
          <span>{startIndex + 1}-{endIndex} of {tickets.length}</span>
          <ButtonPagination onClick={() => handlePrev()}><img src={arrowLeft} alt="" /></ButtonPagination>
          <ButtonPagination onClick={() => handleNext()}><img src={arrowRight} alt="" /></ButtonPagination>
        </FooterTable>
      </Card>
    </Container>
  );
}
