import express from "express";
import axios from "axios";

const app = express();
const PORT = process.env.PORT || 3001;

app.get("/api/advertisers", async (req, res) => {
    const domain=req.query.domain;

    if(domain){
        try{
            const response=await axios(`https://${domain}/ads.txt`);
            const data=Array.from(getResult(response.data));
            res.json({
                        domain: req.query.domain,
                        advertisers: data,
                        num: data.length
                    });
        }
        catch(err){
            console.log("Problem with the domain");
            res.status(502);
            res.json("Problem with the domain");
        }
    }
    else{
        res.json({ message: `Server listening on ${PORT}`});
    }

});

const server=app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

process.on('SIGTERM', () => {
    server.close(() => {  
      console.log('Server closed')
      process.exit(0);
    })
})

function getResult(data) {
    let advOccMap=new Map();
    const lines=data.split('\n');
    lines.map((line)=>{
        const domain=line.trimStart().toLowerCase().split(',')[0];
        //not comment line
        if(isValidDomain(domain)){
            const count=advOccMap.get(domain);
            //domain is already in the map            
            if(count){
              advOccMap.set(domain,count+1);  
            }
            else{
              advOccMap.set(domain,1);  
            }
        }
    });
    return advOccMap;
}

function isValidDomain(domain){
    const inValidSyntax=['#','',' ','subdomain'];
    const firstChar=domain[0];
    const subdomain=domain.substring(0,9);

    if(inValidSyntax.includes(firstChar) || inValidSyntax.includes(subdomain)){
        return false;
    }
    return true;
}
