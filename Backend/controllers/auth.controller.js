export const getCurrentUser = (req, res)=>{
    if(req.isAuthenticated()){
        return res
        .status(200)
        .json({
            success: true,
            user: req.user,
        })
    }else{
        return res
        .status(401)
        .json({
            success: false,
            message: "Not Authenticated"
        })
    }
}

export const logoutUser = (req, res) =>{
    req.logout((err)=>{
        if(err){
            return res
            .status(500)
            .json({
                success: false,
                message: "Logout failed"
            })
        }
        res.clearCookie('session')
        res
        .status(200)
        .json({
            success: true,
            message: "Logged Out Successfully"
        })
    })
}