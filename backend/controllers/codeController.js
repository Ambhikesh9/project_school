import Code from "../models/codeModel.js";
import asyncHandler from "express-async-handler";
import axios from "axios";

const postCodes = asyncHandler(async (req, res) => {
  const code = req.body.code;

  const testcases = [
    {
      source_code: "\nprint(7+8)",
      language_id: 71,
      stdin: "7\n8\n",
      expected_output: "15\n",
    },
  ];

  try {
    const judgeserver = process.env.JUDGE0_SERVER;

    const tokens = [];

    for (const testcase of testcases) {
      const postres = await axios.post(`${judgeserver}/submissions`, testcase);

      tokens.push(postres.data.token);
    }

    setTimeout(async () => {
      const results = [];
      for (const token of tokens) {
        const tokenres = await axios.get(`${judgeserver}/submissions/${token}`);
        results.push(tokenres.data);
      }

      return res.json(results);
    }, 5000);
  } catch (error) {
    return res.json({ error: error.message });
  }
});

export { postCodes };
