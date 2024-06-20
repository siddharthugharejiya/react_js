import { useRef, useEffect, useState } from "react";

function UseRef() {
  let a = useRef("");
  let b = useRef("");
  let c = useRef("");
  let d = useRef("");
  let [state, setstate] = useState("");
  const otp = Math.floor(1000 + Math.random() * 9000);

  useEffect(() => {
    a.current.focus();
  }, []);

  function aa() {
    if (a.current.value.length >= 1) {
      b.current.focus();
    }
  }

  function bb() {
    if (b.current.value.length >= 1) {
      c.current.focus();
    }
  }

  function cc() {
    if (c.current.value.length >= 1) {
      d.current.focus();
    }
  }

  function add() {
    if (state.length === 4) {
      if (state === otp) {
        alert("OTP successfully matched");
      } else {
        alert("OTP not matched");
      }
    } else {
      alert("Please enter a 4-digit OTP");
    }
  }
  function genrate() {
    setstate(otp);
  }
  useEffect(() => {
    if (state != "") {
      alert(state);
    }
  }, [state]);

  return (
    <>
      <input type="text" ref={a} onChange={aa} maxLength={1} />
      <input type="text" ref={b} onChange={bb} maxLength={1} />
      <input type="text" ref={c} onChange={cc} maxLength={1} />
      <input type="text" ref={d} maxLength={1} />
      <button onClick={add}>add</button>
      <button onClick={genrate}>OTP Genrate </button>
    </>
  );
}

export default UseRef;
