import React from 'react';
import EnLanguage from '../../../language';

const Summary = (props) => {
    return (
        <div className="profile_body">
            <div className="Title right">
                <p>{EnLanguage.program_profile_html.Accommodation}</p>
            </div>
            {props.location.state.program.programType === 'umrah' ? <div className="AccommodationUmrah">
                <div className="container">
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th>{EnLanguage.program_profile_html.Hotel_Makkah}</th>
                                <th>{EnLanguage.program_profile_html.Hotel_Maddinah}</th>
                                {/**ngIf="pprops.location.state.program.single!=0"*/}
                                <th>
                                    {EnLanguage.program_profile_html.Single_Room}
                                </th>
                                <th>{EnLanguage.program_profile_html.Double_Room}</th>
                                <th>{EnLanguage.program_profile_html.Triple_Room}</th>
                                <th>{EnLanguage.program_profile_html.Quad_Room}</th>
                                <th>{EnLanguage.program_profile_html.Child} <i className="fa fa-arrow-down"></i> 12
                                    {EnLanguage.program_profile_html.Years}
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{props.location.state.program.MakkahHotel}</td>
                                <td>{props.location.state.program.madinahHotel}</td>
                                {/**ngIf="pprops.location.state.program.single!=0"*/}
                                <td>{props.location.state.program.single} EGP</td>
                                <td>{props.location.state.program.double} EGP</td>
                                <td>{props.location.state.program.triple} EGP</td>
                                <td>{props.location.state.program.quad} EGP</td>
                                <td>{props.location.state.program.child} EGP</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div> : <div className="Accommodationhajj">
                <div className="container">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>{EnLanguage.program_profile_html.Hotel_Name}</th>
                            <th>{EnLanguage.program_profile_html.Location}</th>
                            <th>{EnLanguage.program_profile_html.From}</th>
                            <th>{EnLanguage.program_profile_html.To}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="tr_select">
                            <td>{props.location.state.program.MakkahHotel}</td>
                            <td>{EnLanguage.program_profile_html.Makkah}</td>
                            <td>{props.location.state.program.makkah_from1}</td>
                            <td>{props.location.state.program.makkah_to1}</td>

                        </tr>
                        <tr className="tr_select">
                            <td>{props.location.state.program.MakkahHotel}</td>
                            <td>{EnLanguage.program_profile_html.Makkah}</td>
                            <td>{props.location.state.program.makkah_from2}</td>
                            <td>{props.location.state.program.makkah_to2}</td>
                        </tr>
                        <tr className="tr_select">
                            <td>{props.location.state.program.madinahHotel}</td>
                            <td>{EnLanguage.program_profile_html.Maddinah}</td>
                            <td>{props.location.state.program.madinah_from}</td>
                            <td>{props.location.state.program.madinah_to}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="Title right">
                    <p>{EnLanguage.program_profile_html.Mashaer}</p>
                </div>
                <div className="mashaer">
                    <div>
                        <h3>{EnLanguage.program_profile_html.Arafa}</h3>
                        <div dangerouslySetInnerHTML={{ __html: props.location.state.program.arafa }}></div>
                    </div>
                    <div>
                        <h3>{EnLanguage.program_profile_html.Menah}</h3>
                        <div dangerouslySetInnerHTML={{ __html: props.location.state.program.mena }}></div>
                    </div>

                </div>
            </div>}




            <div className="horizontal_line"></div>
            <div className="rules">
                <div>
                    <h3>{EnLanguage.program_profile_html.Includes}</h3>
                    <div dangerouslySetInnerHTML={{ __html: props.location.state.program.includes }}></div>
                </div>
                <div>
                    <h3>{EnLanguage.program_profile_html.General_Conditions}</h3>
                    <div dangerouslySetInnerHTML={{ __html: props.location.state.program.generalConditions }}></div>
                </div>

            </div>
            {props.location.state.program.programType!=='umrah'?<div className="hajjprice">
                <div className="Title right">
                    <p>{EnLanguage.program_profile_html.Prices}</p>
                </div>
                <div className="container">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>{EnLanguage.program_profile_html.Single}</th>
                            <th>{EnLanguage.program_profile_html.Double}</th>
                            <th>{EnLanguage.program_profile_html.Triple}</th>
                            <th>{EnLanguage.program_profile_html.Quad}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1500</td>
                            <td>200</td>
                            <td>600</td>
                            <td>48484</td>

                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>:null}

        </div>

    )
}
export default Summary