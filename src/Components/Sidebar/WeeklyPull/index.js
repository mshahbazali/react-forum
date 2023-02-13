import React from 'react'

export default function index() {
    return (
        <div className="sidebarblock">
            <h3>Poll of the Week</h3>
            <div className="divline"></div>
            <div className="blocktxt">
                <p>Which game you are playing this week?</p>
                <form action="#" method="post" className="form">
                    <table className="poll">
                        <tr>
                            <td>
                                <div className="progress">
                                    <div className="progress-bar color1" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 90%">
                                        Call of Duty Ghosts
                                    </div>
                                </div>
                            </td>
                            <td className="chbox">
                                <input id="opt1" type="radio" name="opt" value="1" />
                                <label for="opt1"></label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="progress">
                                    <div className="progress-bar color2" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 63%">
                                        Titanfall
                                    </div>
                                </div>
                            </td>
                            <td className="chbox">
                                <input id="opt2" type="radio" name="opt" value="2" checked />
                                <label for="opt2"></label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="progress">
                                    <div className="progress-bar color3" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 75%">
                                        Battlefield 4
                                    </div>
                                </div>
                            </td>
                            <td className="chbox">
                                <input id="opt3" type="radio" name="opt" value="3" />
                                <label for="opt3"></label>
                            </td>
                        </tr>
                    </table>
                </form>
                <p className="smal">Voting ends on 19th of October</p>
            </div>
        </div>
    )
}
