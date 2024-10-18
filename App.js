    // Reactelemnet(Object)=HTML(Browser underStand)
    const parent=React.createElement(
        "div",
        {id:"parent"},
        React.createElement(
            "div",
            {id:"child"},
            [[React.createElement("h1",{},"I am an h1 tag"),React.createElement("h2",{},"this is my world")],
            [React.createElement("h1",{},"I am an h1 tag"),React.createElement("h2",{},"this is my world")],

        ]
        )
    );

    //jsx exist
    
    
    const heading = React.createElement("h1", {
    id:"heading",xyz:"abc"
    }, "Hello world from React");

    const root = ReactDOM.createRoot(document.getElementById("root")); 

    root.render(parent);