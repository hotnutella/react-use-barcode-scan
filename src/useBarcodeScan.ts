import { useEffect, useState } from "react";

const useBarcodeScan = () => {
    const [barcode, setBarcode] = useState<string | null>(null);

    useEffect(() => {
        const onBarcodeScanned = (event: KeyboardEvent) => {
            setBarcode(event.key);
        };

        window.addEventListener("keyup", onBarcodeScanned);

        return () => {
            window.removeEventListener("keyup", onBarcodeScanned);
        };
    }, []);

    return barcode;
}

export default useBarcodeScan;