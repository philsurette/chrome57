if ('serviceWorker' in navigator){
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').then(
            reg => console.log(`sw regn successful with scope ${reg}`)
        ).catch(err => console.log(`sw regn failed with ${err}`)
        );
        // navigator.serviceWorker.register('./loginstall_sw.js').then(
        //     reg => console.log(`loginstall registered with scope ${reg}`)
        // ).catch(err => console.log(`error ${err} while registering loginstall sw`)
        // );
        console.log('done registering');
    });
}