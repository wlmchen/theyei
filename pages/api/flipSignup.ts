import { NextApiRequest, NextApiResponse } from "next";
import { table } from "../../lib/airtable";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // const item = req.body;
    // try {
    //     const newRecord = await table.create({...item});
    //     res.status(200).json({
    //         newRecord
    //     })
    // } catch (error) {
    //     console.log(error);
    //     res.status(500).json({msg: error})
    // }
    res.status(500).json({msg: "SignupHasclosED"})
}