WebSocketClient = function(ConnectionString){
    this._private = function(){};
    this._private.mSocket;

    this._private.Init = function(ConnectionString){
        var _private = this;
        
        _private.mSocket = new WebSocket(ConnectionString);
    }

    // **********************
    this._private.Init(ConnectionString);
}

WebSocketClient.prototype.GetSocket = function(){
    var _private = this._private;

    return _private.mSocket;
}

WebSocketClient.prototype.Send = function(Message){
    var _private = this._private;

    _private.mSocket.send(Message);
}