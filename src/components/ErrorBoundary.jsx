import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props){ super(props); this.state = { hasError:false }; }
  static getDerivedStateFromError(){ return { hasError:true }; }
  componentDidCatch(error, info){ console.error("ErrorBoundary:", error, info); }
  render(){
    if (this.state.hasError) {
      return <div className="container-1140 py-10">Bir şeyler ters gitti. Lütfen sayfayı yenileyin.</div>;
    }
    return this.props.children;
  }
}
