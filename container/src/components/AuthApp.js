import React, { useRef, useEffect } from "react";
import { mount } from "auth/AuthApp";
import { useHistory, usseHistory } from "react-router-dom";

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathname) history.push(nextPathname);
      },
    });

    history.listen(onParentNavigate); //will make an arg available inside onParentNavigate called location
  }, []);

  return <div ref={ref} />;
};
