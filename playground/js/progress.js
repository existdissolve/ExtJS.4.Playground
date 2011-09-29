Ext.onReady(function(){
    var pb = Ext.create('Ext.ProgressBar', {
       margin: 50,ui:'lime'
    });
    
    // Wait for 5 seconds, then update the status el (progress bar will auto-reset)
    pb.wait({
        interval: 500, //bar will move fast!
        duration: 50000,
        increment: 15,
        text: "Hi, I've got a custom UI...",
        scope: this,
        fn: function(){
            pb.updateText('Done!');
        }
    });
    var pa = Ext.create("Ext.panel.Panel", {
        title: "I'm a regular 'default' UI Panel",
        width: 500,
        items: pb,
        floating: true,
        renderTo: Ext.getBody(),
        closable: true
    })
})
