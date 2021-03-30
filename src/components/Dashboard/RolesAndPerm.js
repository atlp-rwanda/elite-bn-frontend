import React, { Component } from 'react';
import { roles, createRole, permissions } from '../../store/actions/index';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { MdEdit, MdDelete } from 'react-icons/md';
import { FaChevronRight, FaPlus } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';

class RolesAndPermissions extends Component {
    state = {
        name: '',
        roles: [],
        permissions: [],
        addRole: false,
        initialRoleState: false,
        initialPermissionState: false,
        activePermision: 0
    }
    static propTypes = {
        roles: PropTypes.func.isRequired,
        getRoles: PropTypes.array.isRequired,
        createRole: PropTypes.func.isRequired,
        permissions: PropTypes.func.isRequired,
        getpermissions: PropTypes.array.isRequired,
    };
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.props.createRole(this.state.name);
    }
    componentWillReceiveProps({ getRoles }) {
        const roles = [...getRoles];
        this.setState({ roles })
    }

    componentDidMount() {
        this.props.roles();
    }


    render() {
        let arr = []
        const { roles, name, initialRoleState, initialPermissionState, permissions, addRole } = this.state;
        return (
            <>
            
                      {console.log(addRole)}
            <div className="col-start-3    row-start-2  col-end-13 p-4 md:p-12 min-h-screen">
                <ul className="md:flex mt-3 ml-5 p-1  border borders w-3/5">
                    <li className="mt-1 mr-1 ml-1 color"><a href=""><AiFillHome /></a></li>
                    <li className="mt-1 mr-1 color"><a href=""><FaChevronRight /></a></li>
                    <li className="mr-1 color"><a>Roles</a></li>
                    <li className="mt-1 mr-1 color"><a href=""><FaChevronRight /></a></li>
                    <li className="color"><a>Permissions</a></li>
                </ul>
                {addRole ? <div className="ml-8"> 
                      <input name = "name" type="text" placeholder="role" value={name} onChange= {this.onChange} />
                       <button onSubmit= {this.onSubmit} ><pan className="text-blue-500 ml-1" onClick= {() => {this.setState({addRole: false})}}>Add</pan></button>
                       </div>: null }
                <div className="md:grid grid-cols-3 background border border-gray-700 mt-4 w-3/5 ml-5">
                    <div className="border-r-2 border-gray-500">
                        <h4 className="text-xl p-1 border-b border-gray-700 font-bold">Roles</h4>
                        <div>
                            <div className="flex pt-2 pl-8 margin cursor-pointer" onClick={() => {this.setState({addRole: !addRole})}}>
                                <span className="mt-1 mr-2 text-blue-500"><FaPlus /></span>
                                <span className="text-blue-500" >Add roles</span>
                            </div>
                            <ul className="pl-8 pb-5">

                                {roles.map((role) => (
                                    <li className={`${!initialPermissionState ? 'flex margin justify-between' : "flex margin justify-between bg-gray-400"}`}
                                        onMouseOver={() => {
                                            this.setState({ initialRoleState: !initialRoleState })
                                        }}
                                        onMouseOut={
                                            () => {
                                                this.setState({ initialRoleState: false })
                                            }
                                        }
                                        key={role.id} className={`flex items-center justify-between margin hover:bg-gray-400 cursor-pointer`} >
                                        <div className="flex" onClick={(() => this.setState({activePermision:roles.indexOf(role)}))}>
                                            <span>{role.name}</span>
                                            <MdEdit className={`${!initialRoleState ? 'hidden' : "mt-1 ml-2 cursor-pointer"}`} />
                                        </div>
                                        <FaChevronRight className={`${!initialRoleState ? 'hidden' : "cursor-pointer"}`} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <h4 className="text-xl p-1 border-b border-gray-700 font-bold">Permissions</h4>
                        <div>
                            <button className="flex pt-2 pl-8 margin">
                                <span className="mt-1 mr-1 text-blue-500"><FaPlus /></span>
                                <span className="text-blue-500">Add permissions</span>
                            </button>
                            <ul className="pl-8 pb-5">
{roles[this.state.activePermision] ?   roles[this.state.activePermision].permissions.map((perm) => {

return (
    <li
        onMouseOver={() => {
            this.setState({ initialPermissionState: !initialPermissionState })
        }}
        onMouseOut={
            () => {
                this.setState({ initialPermissionState: false })
            }
        }
        key={perm.id} className={`flex items-center justify-between margin hover:bg-gray-400`} >
        <span> {perm.permissionName}</span>

        <div className="flex mt-1 mr-2">
            <span className={`${!initialPermissionState ? 'hidden' : "mr-1 text-gray-700"}`}><MdEdit className="cursor-pointer" /></span>
            <span className={`${!initialPermissionState ? 'hidden' : "mr-1 text-gray-700"}`}><MdDelete className="cursor-pointer" /></span>
        </div>
    </li>)

}) : null}
                                {/* {
                                    roles[0].permissions.map((perm) => {

                                        return (
                                            <li
                                                onMouseOver={() => {
                                                    this.setState({ initialPermissionState: !initialPermissionState })
                                                }}
                                                onMouseOut={
                                                    () => {
                                                        this.setState({ initialPermissionState: false })
                                                    }
                                                }
                                                key={perm.id} className={`flex items-center justify-between margin hover:bg-gray-400`} >
                                                <span> {perm.permissionName}</span>

                                                <div className="flex mt-1 mr-2">
                                                    <span className={`${!initialPermissionState ? 'hidden' : "mr-1 text-gray-700"}`}><MdEdit /></span>
                                                    <span className={`${!initialPermissionState ? 'hidden' : "mr-1 text-gray-700"}`}><MdDelete /></span>
                                                </div>
                                            </li>)

                                    })

                          } */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
       </> );
    }
}
const mapStateToProps = (state) => ({
    getRoles: state.roles.roles,
});
export default connect(mapStateToProps, { roles, createRole, permissions })(RolesAndPermissions);
