import Editor from "@monaco-editor/react";
import { useEffect, useState } from "react";
import Split from "split.js";
import axios from "axios";

export default function TestEnv() {
  const [code, setCode] = useState("// Some comment");
  const [results, setResults] = useState(null);

  useEffect(() => {
    Split(["#activity", "#description"], {
      sizes: [50, 50],
      direction: "horizontal",
      gutterSize: 5,
    });

    const problem = {
      testcases: [
        {
          input: "15",
          expected_output: "30",
        },
        {
          input: "16",
          expected_output: "31",
        },
      ],
      description: "Problem description here",
    };

    problem.testcases.forEach((testcase) => {
      console.log(testcase.input);
    });
  }, []);

  function handleEditorCode(value, event) {
    setCode(value);
  }

  const handleSubmit = async () => {
    const res = await axios.post("http://localhost:3000/api/codes/", {
      code: code,
    });

    const results = res.data;
    console.log(results);
  };

  const handleRun = async () => {};

  return (
    <div className="flex bg-background w-screen">
      <div className="flex flex-col pl-2" id="activity">
        <div className="toolbar w-full rounded-t h-[50px] bg-gray-400 flex items-center justify-end px-4 gap-x-3">
          <select
            name="language_id"
            id="language_id"
            className="w-[200px] rounded-md px-2 py-1 "
            defaultValue={1002}
          >
            <option value="45" mode="UNKNOWN">
              Assembly (NASM 2.14.02)
            </option>
            <option value="46" mode="shell">
              Bash (5.0.0)
            </option>
            <option value="47" mode="UNKNOWN">
              Basic (FBC 1.07.1)
            </option>
            <option value="1011" mode="UNKNOWN">
              Bosque (latest)
            </option>
            <option value="75" mode="c">
              C (Clang 7.0.1)
            </option>
            <option value="1013" mode="c">
              C (Clang 9.0.1)
            </option>
            <option value="1001" mode="c">
              C (Clang 10.0.1)
            </option>
            <option value="48" mode="c">
              C (GCC 7.4.0)
            </option>
            <option value="49" mode="c">
              C (GCC 8.3.0)
            </option>
            <option value="50" mode="c">
              C (GCC 9.2.0)
            </option>
            <option value="51" mode="csharp">
              C# (Mono 6.6.0.161)
            </option>
            <option value="1022" mode="csharp">
              C# (Mono 6.10.0.104)
            </option>
            <option value="1021" mode="csharp">
              C# (.NET Core SDK 3.1.302)
            </option>
            <option value="1023" mode="csharp">
              C# Test (.NET Core SDK 3.1.302, NUnit 3.12.0)
            </option>
            <option value="76" mode="cpp">
              C++ (Clang 7.0.1)
            </option>
            <option value="1014" mode="cpp">
              C++ (Clang 9.0.1)
            </option>
            <option value="1002" mode="cpp">
              C++ (Clang 10.0.1)
            </option>
            <option value="52" mode="cpp">
              C++ (GCC 7.4.0)
            </option>
            <option value="53" mode="cpp">
              C++ (GCC 8.3.0)
            </option>
            <option value="54" mode="cpp">
              C++ (GCC 9.2.0)
            </option>
            <option value="1015" mode="cpp">
              C++ Test (Clang 10.0.1, Google Test 1.8.1)
            </option>
            <option value="1012" mode="cpp">
              C++ Test (GCC 8.4.0, Google Test 1.8.1)
            </option>
            <option value="1003" mode="c">
              C3 (latest)
            </option>
            <option value="86" mode="clojure">
              Clojure (1.10.1)
            </option>
            <option value="77" mode="UNKNOWN">
              COBOL (GnuCOBOL 2.2)
            </option>
            <option value="55" mode="UNKNOWN">
              Common Lisp (SBCL 2.0.0)
            </option>
            <option value="56" mode="UNKNOWN">
              D (DMD 2.089.1)
            </option>
            <option value="57" mode="UNKNOWN">
              Elixir (1.9.4)
            </option>
            <option value="58" mode="UNKNOWN">
              Erlang (OTP 22.2)
            </option>
            <option value="44" mode="plaintext">
              Executable
            </option>
            <option value="87" mode="fsharp">
              F# (.NET Core SDK 3.1.202)
            </option>
            <option value="1024" mode="fsharp">
              F# (.NET Core SDK 3.1.302)
            </option>
            <option value="59" mode="UNKNOWN">
              Fortran (GFortran 9.2.0)
            </option>
            <option value="60" mode="go">
              Go (1.13.5)
            </option>
            <option value="88" mode="UNKNOWN">
              Groovy (3.0.3)
            </option>
            <option value="61" mode="UNKNOWN">
              Haskell (GHC 8.8.1)
            </option>
            <option value="62" mode="java">
              Java (OpenJDK 13.0.1)
            </option>
            <option value="1004" mode="java">
              Java (OpenJDK 14.0.1)
            </option>
            <option value="1005" mode="java">
              Java Test (OpenJDK 14.0.1, JUnit Platform Console Standalone
              1.6.2)
            </option>
            <option value="63" mode="javascript">
              JavaScript (Node.js 12.14.0)
            </option>
            <option value="78" mode="kotlin">
              Kotlin (1.3.70)
            </option>
            <option value="64" mode="lua">
              Lua (5.3.5)
            </option>
            <option value="1006" mode="c">
              MPI (OpenRTE 3.1.3) with C (GCC 8.3.0)
            </option>
            <option value="1007" mode="cpp">
              MPI (OpenRTE 3.1.3) with C++ (GCC 8.3.0)
            </option>
            <option value="1008" mode="python">
              MPI (OpenRTE 3.1.3) with Python (3.7.3)
            </option>
            <option value="1009" mode="python">
              Nim (stable)
            </option>
            <option value="79" mode="objective-c">
              Objective-C (Clang 7.0.1)
            </option>
            <option value="65" mode="UNKNOWN">
              OCaml (4.09.0)
            </option>
            <option value="66" mode="UNKNOWN">
              Octave (5.1.0)
            </option>
            <option value="67" mode="pascal">
              Pascal (FPC 3.0.4)
            </option>
            <option value="85" mode="perl">
              Perl (5.28.1)
            </option>
            <option value="68" mode="php">
              PHP (7.4.1)
            </option>
            <option value="43" mode="plaintext">
              Plain Text
            </option>
            <option value="69" mode="UNKNOWN">
              Prolog (GNU Prolog 1.4.5)
            </option>
            <option value="70" mode="python">
              Python (2.7.17)
            </option>
            <option value="71" mode="python">
              Python (3.8.1)
            </option>
            <option value="1010" mode="python">
              Python for ML (3.7.3)
            </option>
            <option value="80" mode="r">
              R (4.0.0)
            </option>
            <option value="72" mode="ruby">
              Ruby (2.7.0)
            </option>
            <option value="73" mode="rust">
              Rust (1.40.0)
            </option>
            <option value="81" mode="UNKNOWN">
              Scala (2.13.2)
            </option>
            <option value="82" mode="sql">
              SQL (SQLite 3.27.2)
            </option>
            <option value="83" mode="swift">
              Swift (5.2.3)
            </option>
            <option value="74" mode="typescript">
              TypeScript (3.7.4)
            </option>

            <option value="84" mode="vb">
              Visual Basic.Net (vbnc 0.0.0.5943)
            </option>
          </select>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 20q-3.35 0-5.675-2.325T4 12q0-3.35 2.325-5.675T12 4q1.725 0 3.3.712T18 6.75V4h2v7h-7V9h4.2q-.8-1.4-2.188-2.2T12 6Q9.5 6 7.75 7.75T6 12q0 2.5 1.75 4.25T12 18q1.925 0 3.475-1.1T17.65 14h2.1q-.7 2.65-2.85 4.325T12 20Z"
            />
          </svg>
          <button
            className="submitbtn bg-gray-500 mr-1 text-text py-1.5 px-5 rounded-md text-center"
            onClick={handleRun}
          >
            Run
          </button>
          <button
            className="submitbtn bg-primary  text-text py-1.5 px-5 rounded-md text-center"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        <Editor
          height="400px"
          width="100%"
          defaultLanguage="python"
          defaultValue={code}
          theme="vs-dark"
          onChange={handleEditorCode}
        />
        <div className="test-area w-full h-56 text-text rounded   mt-3 bg-262626 ">
        <div className="toolbar w-full rounded-t h-[40px] bg-gray-400 flex items-center justify-end px-4 gap-x-3">
          <a href="#" className="text-black">
            Testcases
          </a>
          </div>
          <div className=" w-full pl-4 pt-4 flex flex-col">
          <div className="flex flex-row gap-x-5 mb-3">
            <a href="#" className="rounded-md bg-[#3c3c3c] font-semibold text-center  px-2.5 py-0.5 hover:bg-[#454545]">Case 1</a>
            <a href="#" className="rounded  font-semibold text-center  px-2.5 py-0.5 hover:bg-[#454545]">Case 2</a>
            <a href="#" className="rounded  font-semibold text-center  px-2.5 py-0.5 hover:bg-[#454545]">Case 3</a>
          </div>
          <div className="text-sm">s = </div>
          <div className="w-9/10  mt-1 mb-4 py-3 mr-3 pl-3 bg-[#3c3c3c] rounded-md text-center flex items-center"> "abcabcbb"</div>
          </div>
        </div>
      </div>
      <div
        className="bg-282828 rounded h-full mr-3 overflow-y-auto"
        id="description"
        style={{ height: "calc(100vh - 85px)" }}
      >
        <div className="toolbar3  text-center  w-full rounded-t h-[50px] bg-gray-400 flex items-center justify-end gap-5 px-4">
          <a href="#">Description</a>
          <a href="#">Editorial</a>
          <a href="#">Solutions</a>
          <a href="#">Submissions</a>
        </div>
        <div className="description text-text pt-4 pl-3">
          <div className="question-head flex flex-col items-start">
            <a className="text-lg mb-2">
              3. Longest Substring Without Repeating Characters
            </a>
          </div>
          <div className="flex justify-start items-center text-center gap-5">
            <h3 className=" text-base text-yellow-400 ">Medium</h3>
            <a href="#" className="like mr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M234 80.12A24 24 0 0 0 216 72h-56V56a40 40 0 0 0-40-40a8 8 0 0 0-7.16 4.42L75.06 96H32a16 16 0 0 0-16 16v88a16 16 0 0 0 16 16h172a24 24 0 0 0 23.82-21l12-96A24 24 0 0 0 234 80.12M32 112h40v88H32Zm191.94-15l-12 96a8 8 0 0 1-7.94 7H88v-94.11l36.71-73.43A24 24 0 0 1 144 56v24a8 8 0 0 0 8 8h64a8 8 0 0 1 7.94 9"
                />
              </svg>
            </a>
            <a href="#" className="dislike mr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="m239.82 157l-12-96A24 24 0 0 0 204 40H32a16 16 0 0 0-16 16v88a16 16 0 0 0 16 16h43.06l37.78 75.58A8 8 0 0 0 120 240a40 40 0 0 0 40-40v-16h56a24 24 0 0 0 23.82-27M72 144H32V56h40Zm150 21.29a7.88 7.88 0 0 1-6 2.71h-64a8 8 0 0 0-8 8v24a24 24 0 0 1-19.29 23.54L88 150.11V56h116a8 8 0 0 1 7.94 7l12 96a7.87 7.87 0 0 1-1.94 6.29"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="question flex flex-col text-text pl-3 pt-4">
          <h3 className="mb-4">
            Given a string s, find the length of the longest substring without
            repeating characters.
          </h3>
          <h4 className="font-bold my-2">Example 1:</h4>
          <h4 className="pl-2 flex gap-2">
            <h4 className="font-bold">Input:</h4>s = "abcabcbb"
          </h4>
          <h4 className="pl-2 flex gap-2">
            <h4 className="font-bold">Output:</h4>3
          </h4>
          <h4 className="pl-2 flex gap-2">
            <h4 className="font-bold">Explanation:</h4>The answer is "abc", with
            the length of 3.
          </h4>
          <h4 className="font-bold my-3">Example 2:</h4>
          <h4 className="pl-2 flex gap-2">
            <h4 className="font-bold">Input:</h4>s = "bbbbb"
          </h4>
          <h4 className="pl-2 flex gap-2">
            <h4 className="font-bold">Output:</h4>1
          </h4>
          <h4 className="pl-2 flex gap-2">
            <h4 className="font-bold">Explanation:</h4>The answer is "b", with
            the length of 1.
          </h4>
          <h4 className="font-bold my-3">Example 3:</h4>
          <h4 className="pl-2 flex gap-2">
            <h4 className="font-bold">Input:</h4>s = "pwwkew"
          </h4>
          <h4 className="pl-2 flex gap-2">
            <h4 className="font-bold">Output:</h4>3
          </h4>
          <h4 className="pl-2 flex gap-2">
            <h4 className="font-bold">Explanation:</h4>The answer is "wke", with
            the length of 3.Notice that the answer must be a substring, "pwke"
            is a subsequence and not a substring.
          </h4>
          <div className="mt-12 flex justify-between items-center">
            <h4>Similar Questions</h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062"
              />
            </svg>
          </div>
          <hr className="border-gray-800 mt-2 mr-1"></hr>
          <div className="mt-3 mb-4 flex justify-between items-center">
            <h4>Related Topics</h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
