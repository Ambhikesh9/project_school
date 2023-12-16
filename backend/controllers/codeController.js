import Code from "../models/codeModel.js";
import asyncHandler from "express-async-handler";
import axios from "axios";

const postCodes = asyncHandler(async (req, res) => {
  const code = req.body.code;

  const testcases = [
    {
      source_code: code,
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
    }, 7000);
  } catch (error) {
    return res.json({ error: error.message });
  }
});

const postCodesConcept = asyncHandler(async (req, res) => {
  const code = req.body.code;
  const concept = req.body.concept;
  try {
    const conceptcheck = await axios.post(process.env.GEMINI_API, {
      prompt: {
        text: `Does this ${code} uses the ${concept} in the code? Answer me in only one word. YES/NO`,
      },
    });

    if (conceptcheck.data.candidates[0].output == "YES") {
      const testcases = [
        {
          source_code: "x = 5\nif True:\n  while True:\n    pass",
          language_id: 71,
          stdin: "7\n8\n",
          expected_output: "15\n",
        },
      ];

      try {
        const judgeserver = process.env.JUDGE0_SERVER;

        const tokens = [];

        for (const testcase of testcases) {
          const postres = await axios.post(
            `${judgeserver}/submissions`,
            testcase
          );

          tokens.push(postres.data.token);
        }

        setTimeout(async () => {
          const results = [];
          for (const token of tokens) {
            const tokenres = await axios.get(
              `${judgeserver}/submissions/${token}`
            );
            results.push(tokenres.data);
          }

          return res.json("correct");
        }, 7000);
      } catch (error) {
        return res.json({ error: error.message });
      }
    } else {
      throw new Error("Use the correct concept in the code");
    }
  } catch (error) {
    res.json({ error: error.message });
  }
});

export { postCodes, postCodesConcept };
