/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import { connect } from 'react-redux';
import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import Skeleton from 'react-loading-skeleton';
import Action from './Action';
import Travel from './Travel';
import Edit from './Edit';
import { editTravelRequest, manageTravelRequest, travel } from '../../../store/actions/travel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';

class TravelContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      perPage: 20,
      currentPage: null,
      selectedTravels: [],
      action: '',
      editRequest: null,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
    this.handleChangeSelectedTravels = this.handleChangeSelectedTravels.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this); 
    this.selectHandler = this.selectHandler.bind(this);
    this.handleEdit = this.handleEdit.bind(this); 
    this.inputFromHandler = this.inputFromHandler.bind(this);
    this.inputTravelReasonHandler = this.inputTravelReasonHandler.bind(this);
    this.inputReturnDateHandler = this.inputReturnDateHandler.bind(this);
    this.inputTravelTypeHandler = this.inputTravelTypeHandler.bind(this);
    this.closeEdit = this.closeEdit.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentDidMount() {
    this.props.onTravel();
  }

  submitHandler = () => {
    const { editRequest: editedTravelRequest, currentPage } = this.state;
    this.props.onEditTravel(editedTravelRequest, currentPage + 1);
    this.setState({
      editRequest: null,
    })
  }

  closeEdit = () => {
    this.setState({
      editRequest: null
    });
  }

  inputFromHandler = (e) => {
    this.setState({
      editRequest: {
        ...this.state.editRequest,
        orgin: e.target.value,
      }
    });
  }

  inputTravelTypeHandler = (e) => {
    this.setState({
      editRequest: {
        ...this.state.editRequest,
        type: e.target.value,
      }
    });
  }

  inputTravelReasonHandler = (e) => {
    this.setState({
      editRequest: {
        ...this.state.editRequest,
        reason: e.target.value,
      }
    });
  }

  inputReturnDateHandler = (e) => {
    this.setState({
      editRequest: {
        ...this.state.editRequest,
        returnDate: e.target.value,
      }
    });
  }

  handleEdit = (tRequest) => {
    this.setState({
      editRequest: tRequest
    });
  }

  selectHandler =  (e) => {
    this.setState({
      action: e.target.value
    });
  }

  handleCheckBox = (e, tRequest) => {
    let arr = this.state.selectedTravels;
    if(e.target.checked === true){
      arr.push(tRequest);
    } else {
      arr = this.state.selectedTravels.filter((item) => item.id !== tRequest.id);
    }
    this.setState({
      selectedTravels: [...arr],
      action: '',
    });
    
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    this.setState({
        currentPage: selectedPage,
    }, () => {
      this.props.onTravel(this.state.currentPage + 1);
    });
  };

  handleChangeSelectedTravels = () => {
    this.props.onChangeTravel(this.state.action,
      this.state.selectedTravels,
      this.state.currentPage + 1)
    this.setState({
      selectedTravels: [],
      action: '',
    })
  }


  render() {
    let travels = [];
    for(let i = 0; i<20; i += 1) {
      travels.push(<tr key={i}><td colSpan={8}><Skeleton style={{ height: '100%', width: '100%' }} /></td></tr>);
    }
    let items;
    let pageCount;
    if (!this.props.loading && this.props.data) {
      const { rows: travelRow, count } = this.props.data;
      items = count;
      travels = travelRow.map((travelRequest) => (
        <Travel
          check={this.state.checked}
          changed={(e) => this.handleCheckBox(e, travelRequest)}
          edit={() => this.handleEdit(travelRequest)}
          key={travelRequest.id}
          travelRequest={travelRequest}
        />
      ));
      pageCount = Math.ceil( count / this.state.perPage);
    }
    return (
      <div className="flex flex-col w-full items-center relative">
        {this.state.editRequest && 
          (<Edit
             save={this.submitHandler}
             close={this.closeEdit}
             tRequest={this.state.editRequest}
             editFrom={this.inputFromHandler.bind(this)}
             editTravelReason={this.inputTravelReasonHandler.bind(this)}
             editTravelType={this.inputTravelTypeHandler.bind(this)}
             editTravelReturnDate={this.inputReturnDateHandler.bind(this)}
           />)
        }
        <Action
          action={this.state.action}
          changed={this.selectHandler.bind(this)}
          clicked={this.handleChangeSelectedTravels}
          selectedItems={this.state.selectedTravels}
          count={items} />
        <div className="table-wrapper mt-4 bg-white text-gray-600 w-full">
          <table className="table-auto w-full text-left border-collapse">
            <thead>
              <tr className="shadow-md">
                <th scope="col" className="pl-2">
                  <FontAwesomeIcon icon={faClipboardCheck} className="text-blue-600" />
                </th>
                <th scope="col" className="is_visible">Requester</th>
                <th scope="col" className="is_visible">Destination</th>
                <th scope="col" className="content">Accomodation</th>
                <th scope="col" className="user">Travel type</th>
                <th scope="col" className="question">Travel reason</th>
                <th scope="col" className="question">Status</th>
                <th scope="col" className="is_visible">Return Date</th>
              </tr>
            </thead>
            <tbody className="align-baseline">{travels}</tbody>
          </table>
        </div>
        <ReactPaginate
          previousLabel="prev"
          nextLabel="next"
          breakLabel="..."
          breakClassName="break-me"
          pageCount={pageCount || 0}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName="pagination"
          subContainerClassName="pages pagination"
          activeClassName="active"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.travel.loading,
  error: state.travel.error,
  data: state.travel.data,
});

const mapDispatchToProps = (dispatch) => ({
  onTravel: (page = 1, itemsPerPage = 20) => dispatch(travel(page, itemsPerPage)),
  onChangeTravel: (action, tRequest, page) => dispatch(manageTravelRequest(action, tRequest, page)),
  onEditTravel: (tRequest, page) => dispatch(editTravelRequest(tRequest, page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TravelContainer);
