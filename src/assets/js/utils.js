export const difference = (a, b) => a.filter(i => b.indexOf(i) < 0);

export const cloneDeep = source => JSON.parse(JSON.stringify(source));

export const isEmpty = source => source === '' || source === null || source === undefined || JSON.stringify(source) === '{}' || JSON.stringify(source) === '[]';

export const getStorage = (store) => {
    let storage = {};
    for (let i in store) {
        storage[store[i]] = localStorage.getItem(store[i]);
    }
    return storage;
};

export const setStorage = (storage) => {
    Object.keys(storage).forEach(i => {
        localStorage.setItem(i, storage[i]);
    });
};

export const getLocalhostIP = () => {
    let RTCPeerConnection = window.RTCPeerConnection || window.webkitRTCPeerConnection || window.mozRTCPeerConnection;
    if (!RTCPeerConnection) {
        console.warn("请使用主流浏览器：chrome,firefox,opera,safari");
        return;
    }
    (() => {
        let rtc = new RTCPeerConnection({iceServers: []});
        if (1 || window.mozRTCPeerConnection) {
            rtc.createDataChannel('', {reliable: false});
        }

        rtc.onicecandidate = (evt) => {
            if (evt.candidate) grepSDP("a=" + evt.candidate.candidate);
        };
        rtc.createOffer((offerDesc) => {
            grepSDP(offerDesc.sdp);
            rtc.setLocalDescription(offerDesc);
        }, (e) => {
            console.warn("offer failed", e);
        });


        let addrs = Object.create(null);
        addrs["0.0.0.0"] = false;

        const updateDisplay = (newAddr) => {
            if (newAddr in addrs) return;
            else addrs[newAddr] = true;
            let displayAddrs = Object.keys(addrs).filter((k) => {
                return addrs[k];
            });
            for (let i = 0; i < displayAddrs.length; i++) {
                if (displayAddrs[i].length > 16) {
                    displayAddrs.splice(i, 1);
                    i--;
                }
            }
            window.ips = displayAddrs[0];
        };

        const grepSDP = (sdp) => {
            let hosts = [];
            sdp.split('\r\n').forEach((line, index, arr) => {
                if (~line.indexOf("a=candidate")) {
                    let parts = line.split(' '),
                        addr = parts[4],
                        type = parts[7];
                    if (type === 'host') updateDisplay(addr);
                } else if (~line.indexOf("c=")) {
                    let parts = line.split(' '),
                        addr = parts[2];
                    updateDisplay(addr);
                }
            });
        }
    })();
};
