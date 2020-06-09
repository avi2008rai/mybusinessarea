import React from 'react';
const headertopmenu = () => {
    return (
        <div className="header-top">
            <div className="container">
                <div className="call pull-left">
                    <p>Call us toll free : <span>+1324 353 4689</span></p>
                </div>
                <div className="user-info pull-right">
                    <div className="user">
                        <ul>
                            <li><a href="https://mybusinessarea.com" data-toggle="modal" data-target="#login">Login</a>
                                <div className="modal fade" id="login" role="dialog">
                                    <div className="modal-dialog">
                                        {/* <!-- Modal content--> */}
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <div className="panel-heading">
                                                    <div className="panel-title pull-left">Login</div>
                                                    <div className="pull-right"><a href="https://mybusinessarea.com">Forgot password?</a>
                                                        <button aria-hidden="true" data-dismiss="modal" className="close btn btn-xs " type="button"> <i className="fa fa-times"></i> </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-body">
                                                <form id="loginform" className="form-horizontal">
                                                    <div className="input-group"> <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                                        <input id="login-username" type="text" className="form-control" name="username" value="" placeholder="username or email" />
                                                    </div>
                                                    <div className="input-group"> <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                                        <input id="login-password" type="password" className="form-control" name="password" placeholder="password" />
                                                    </div>
                                                    <div className="input-group">
                                                        <div className="checkbox">
                                                            <label>
                                                                <input id="login-remember" type="checkbox" name="remember" value="1" />
                                                Remember me</label>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="col-sm-12 controls"> <a id="btn-login" href="https://mybusinessarea.com" className="btn btn-primary btn-success">Login</a> <a id="btn-fblogin" href="https://mybusinessarea.com" className="btn btn-primary facebook">Login with</a> </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="modal-footer">
                                                <div className="form-group">
                                                    <div className="col-md-12 control">
                                                        <div>Don't have an account! <a href="https://mybusinessarea.com">Sign Up Here</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li><a href="https://mybusinessarea.com" data-toggle="modal" data-target="#register">Register</a>
                                <div className="modal fade" id="register" role="dialog">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <div className="panel-heading">
                                                    <div className="panel-title pull-left">Register</div>
                                                    <div className="pull-right">
                                                        <button aria-hidden="true" data-dismiss="modal" className="close" type="button"><i className="fa fa-times"></i> </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-body">
                                                <div className="control-group">

                                                    <label className="control-label" for="username">Username</label>
                                                    <div className="controls">
                                                        <input type="text" id="username" name="username" placeholder="" className="input-xlarge" />
                                                        <p className="help-block">Username can contain any letters or numbers, without spaces</p>
                                                    </div>
                                                </div>
                                                <div className="control-group">

                                                    <label className="control-label" for="email">E-mail</label>
                                                    <div className="controls">
                                                        <input type="text" id="email" name="email" placeholder="" className="input-xlarge" />
                                                        <p className="help-block">Please provide your E-mail</p>
                                                    </div>
                                                </div>
                                                <div className="control-group">

                                                    <label className="control-label" for="password">Password</label>
                                                    <div className="controls">
                                                        <input type="password" id="password" name="password" placeholder="" className="input-xlarge" />
                                                        <p className="help-block">Password should be at least 4 characters</p>
                                                    </div>
                                                </div>
                                                <div className="control-group">

                                                    <label className="control-label" for="password_confirm">Password (Confirm)</label>
                                                    <div className="controls">
                                                        <input type="password" id="password_confirm" name="password_confirm" placeholder="" className="input-xlarge" />
                                                        <p className="help-block">Please confirm password</p>
                                                    </div>
                                                </div>
                                                <div className="control-group">

                                                    <div className="controls">
                                                        <button className="btn btn-success">Register</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>






            </div>
        </div>

    );
}
// const headertopmenu = () => {
//     return (
//         <div className="header-top">
//             <div className="container">
//                 <div className="call pull-left">
//                     <p>Call us toll free : <span>+1324 353 4689</span></p>
//                 </div>
//             </div>
//         </div>
//     );

// }

export default headertopmenu;