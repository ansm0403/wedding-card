import React, { Children } from "react"

interface ErrorBoundaryProps{
    children : React.ReactNode
    fallbackUI : React.ReactNode
}

interface ErrorBoundaryState{
    hasError : boolean
}

class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
>{
    constructor(props : ErrorBoundaryProps){
        super(props)
        this.state = {hasError : false}
    }
    static getDerivedStateFromError(){
        return {hasError : true}
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        
    }

    render() {
        if(this.state.hasError){
            return this.props.fallbackUI ?? <>에러 발생</>
        } 
        return this.props.children;
    }
}

export default ErrorBoundary;