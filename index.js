export default f => (x => f((...v) => x(x)(...v)))(x => f((...v) => x(x)(...v)))
