interface ButtonProps {
  title: string,
  description?: string
};

function Button(props: ButtonProps) {
  return (
    <button>
      {props.title}
      {props.description && props.description}
    </button>
  )
};

function App() {
  return (
    <div>
      <Button title="enviar"/>
      <Button title="modificar"/>
      <Button title="deletar" description="apagar algo"/>
    </div>  
  )
};

export default App;