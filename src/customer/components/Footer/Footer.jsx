import { Grid } from "@mui/material";

export default function Footer  () {
    return (
        <>
        
<Grid container spacing={22} className="bg-black text-white mt-5 py-7" justifyContent="center">
  <Grid item  xs={12} md={3} sm={6} className="text-center">
                    <div>
                        <h2 className="mb-7 text-lg font-semibold">Company</h2>
                    </div>
                    
                    <div>
                        <button className="mb-2 text-xs cursor-pointer hover:text-gray-500">ABOUT</button>
                    </div>

                     <div>
                        <button className="mb-2 text-xs cursor-pointer hover:text-gray-500">BLOG</button>
                    </div>

                     <div>
                        <button className="mb-2 text-xs cursor-pointer hover:text-gray-500">PRESS</button>
                    </div>

                     <div>
                        <button className="mb-2 text-xs cursor-pointer hover:text-gray-500">JOBS</button>
                    </div>
                     <div>
                        <button className="mb-2 text-xs cursor-pointer hover:text-gray-500">PARTNERS</button>
                    </div>

  </Grid>
  <Grid item  xs={12} md={3} sm={6} className="text-center">
                     <div>
                        <h2 className="mb-7 text-lg font-semibold">Solutions</h2>
                    </div>
                    
                    <div>
                        <button className="mb-2 text-xs cursor-pointer hover:text-gray-500">MARKETING</button>
                    </div>

                     <div>
                        <button className="mb-2 text-xs cursor-pointer hover:text-gray-500">ANALYTICS</button>
                    </div>

                     <div>
                        <button className="mb-2 text-xs cursor-pointer hover:text-gray-500">COMMERCE</button>
                    </div>

                     <div>
                        <button className="mb-2 text-xs cursor-pointer hover:text-gray-500">INSIGHTS</button>
                    </div>
                     <div>
                        <button className="mb-2 text-xs cursor-pointer hover:text-gray-500">SUPPORT</button>
                    </div>
                    
  </Grid>
  <Grid item  xs={12} md={3} sm={6} className="text-center">
    <div>
                        <h2 className="mb-7 text-lg font-semibold">Documentation</h2>
                    </div>
                    
                    <div>
                        <button className="mb-2 text-xs cursor-pointer hover:text-gray-500">GUIDES</button>
                    </div>

                     <div>
                        <button className="mb-2 text-xs cursor-pointer hover:text-gray-500">API STATUS</button>
                    </div>

  </Grid>
  <Grid item  xs={12} md={3} sm={6} className="text-center">
     <div>
                        <h2 className="mb-7 text-lg font-semibold">Legal</h2>
                    </div>
                    
                    <div>
                        <button className="mb-2 text-xs cursor-pointer hover:text-gray-500">CLAIM</button>
                    </div>

                     <div>
                        <button className="mb-2 text-xs cursor-pointer hover:text-gray-500">PRIVACY</button>
                    </div>

                     <div>
                        <button className="mb-2 text-xs cursor-pointer hover:text-gray-500">TERMS</button>
                    </div>

  </Grid>
            </Grid>
            
            <Grid className="pt-17 pb-8 text-center bg-black text-gray-200 text-xs">

                <Grid item xs={12} md={3} sm={6}>
                    <p>&copy; 2025 My Company. All rights reserved.</p>
                    <p>Made with love by me.</p>
                    <div>
                        <p>Icons made by <a href="https://www.freepik.com/">Freepik</a> from <a href="https://www.flaticon.com/">www.flaticon.com</a></p>
                    </div>
                </Grid>

            </Grid>
        
        </>
    )
}