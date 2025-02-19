import { useEffect, useState } from "react";
import "../App.css";
import {ClientTableRow, ClientTableJsonObject, getClientTable} from "../DataObjects/ClientTableInterface";
import { INIT_RESULT_DATA } from "../DataConstants/ClientTableConstants";




export default function Main() {
    
  const [tableData, setTableData] = useState<ClientTableRow[]>([INIT_RESULT_DATA]);
  const [modalClientData, setmodalClientData] = useState<ClientTableRow>(INIT_RESULT_DATA);
  const [isModalActive, setIsModalActive] = useState<Boolean>(false);


  //A function that supports the creation of the client table.
  function setClientTable(){
    try{
      getClientTable().then(
        function (response: any){
          let clientTableArray: ClientTableRow[] = [];
          
          //Define the output of my objects to the array.
          response.data.forEach((element: ClientTableJsonObject) => {
            clientTableArray.push({
              id: (element.id ? element.id : null),
              ClientName: (element.client_name ? element.client_name : ""),
              AddressState: (element.state ? element.state : ""),
              InventoryCount: (element.num_of_inventories ? element.num_of_inventories : null),
              ContactCount: (element.num_of_contacts ? element.num_of_contacts : null)
            });
          });


          //Overwrite the table data.
          setTableData(clientTableArray);
        },
        (error) => {
          console.log(error)
        }
      );
    } catch{}
  } 
  
  function toggleModal() {
    setIsModalActive(!isModalActive);
  }

  function showModal(key: number){
    let clientRow: ClientTableRow = tableData.at(key);
    setmodalClientData(clientRow);
    toggleModal();
  }


  const Modal = ({ closeModal, modalState }: { closeModal: any, modalState: boolean }) => {
    if(!modalState) {
      return null;
    }
    
    return(
      
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <div className="modal-card-head is-radiusless">
            <p className="modal-card-title">Client Information</p>
            <button className="delete is-pulled-right" aria-label="close" onClick={closeModal}></button>
          </div>
          <section className="modal-card-body columns">
            <div className="column">
              <label className="has-text-weight-medium">Number: </label>
              <p className="mb-3">{(modalClientData.id ? modalClientData.id.toString() : "")}</p>
              { modalClientData.ClientName &&
                <>
                  <label className="has-text-weight-medium">Client Na: </label>
                  <p>{(modalClientData.ClientName ? modalClientData.ClientName : "")}</p>
                </>
              }
            </div>
            <div className="column">
              { modalClientData.AddressState &&
                <>
                  <label className="has-text-weight-medium">State: </label>
                  <p className="mb-3">{(modalClientData.AddressState ? modalClientData.AddressState : "")}</p>
                </>
              }
              { modalClientData.InventoryCount &&
                <>
                  <label className="has-text-weight-medium">Number of Inventories: </label>
                  <p className="mb-3">{(modalClientData.InventoryCount ? modalClientData.InventoryCount.toString() : "")}</p>
                </>
              }
              { modalClientData.ContactCount &&
                <>
                  <label className="has-text-weight-medium">Number of Contacts: </label>
                  <p>{(modalClientData.ContactCount ? modalClientData.ContactCount.toString() : "")}</p>
                </>
              }
            </div>
          </section>
        </div>
      </div>
    );
  }


  //The useEffect is a function that runs whenever the set data changes or when loading the page.
  useEffect(() => {
    setClientTable();
  }, []);
  
  return (
    <>
            <h2 className="is-size-2 pb-6 has-text-weight-medium has-text-centered">"Company A"</h2>
      <div className="tile is-ancestor">
  <div className="tile is-vertical is-parent">
    <div className="tile is-vertical is-10 is-child box has-text-black notification">
      <p className="title">One</p>
      <figure className="image ">
            {/* <img src="/"> </img> */}
          </figure>
    </div>
    {/* <div className="tile is-child box">
      <p className="title">Two</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
    </div> */}
  </div>
  <div className="tile is-parent">
    <div className="tile is-vertical is-12 is-child box notification has-text-black">
      <p className="title">Three</p>
      <p>Addy:</p> <p>Email</p> <p>Contact #1</p>
       </div>
  </div>
</div>
      {/* <h2 className="is-size-2 pb-6 has-text-weight-medium has-text-centered">Client List</h2> */}
      <div className="box columns is-centered is-radiusless">
        <div className="column is-12 px-0 py-0"> 
            <table className="table is-striped is-fullwidth">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Storage location</th>
                    <th>State</th>
                    <th>Number of Inventories</th>
                    <th>Number of Contacts</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, i) =>
                    <tr id={(row.id ? row.id.toString() : "")}>
                      <td>{(row.id ? row.id.toString() : "")}</td>
                      <td>{(row.ClientName ? row.ClientName : "")}</td>
                      <td>{(row.AddressState ? row.AddressState : "")}</td>
                      <td>{(row.InventoryCount ? row.InventoryCount.toString() : "")}</td>
                      <td>{(row.ContactCount ? row.ContactCount.toString() : "")}</td>
                      <td><button className="button is-dark" onClick={() => showModal(i)}>View Client Details</button></td>
                    </tr> 
                  )}
                </tbody>
            </table>
            <Modal
              closeModal={toggleModal}
              modalState={isModalActive.valueOf()}
            />
        </div>
      </div>
      <div className="content container has-text-centered">
        {/* <h1 className="title has-text-success">
        <button className="button is-black">Black</button>
        <button className="button is-black">Black</button>
        <button className="button is-black">Black</button>
        </h1> */}
        <div className="columns is-centered">
        <button className="button mt-5 is-black">Black</button>
        </div>
      </div>
    </>
  );
}