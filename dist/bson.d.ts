export declare namespace BSON {
    /**
     * UUID class
     */
    class UUID {
        private _id;
        constructor(id: Uint8Array | Array<number>);
        buffer(): Uint8Array;
    }
    /**
     * ObjectId class (for mongoDB usage)
     */
    class ObjectId {
        private _id;
        constructor(id: Uint8Array | Array<number>);
        buffer(): Uint8Array;
    }
    /**
     * The UTC class contains the milliseconds since the Unix epoch (1.1.1970 00:00:00 UTC)
     */
    class UTC {
        private _time;
        constructor(time?: Uint8Array | Array<number> | string);
        buffer(): Uint8Array;
        /**
         * Convert an (ISO) date string
         * @param {String} date (ISO) Date string
         */
        fromString(date: string): void;
        /**
         * Returns the milliseconds since the Unix epoch (UTC)
         */
        toNumber(): number;
        toDate(): Date;
    }
    /**
     * Serialize an object to BSON format
     * @param {Object} object The object to serialize
     * @return {Uint8Array} An byte array with the BSON representation
     */
    function serialize(object: any): Uint8Array;
    /**
     * Deserialize (parse) BSON data to an object
     * @param {Uint8Array} buffer The buffer with BSON data to convert
     * @param {Boolean} useUTC Optional, if set an UTC object is created for 'UTC datetime', else an Date object. Defaults to false
     * @return {Object} Returns an object or an array
     */
    function deserialize(buffer: Uint8Array, useUTC?: boolean, i?: number, returnArray?: boolean): Array<any> | Object;
}
