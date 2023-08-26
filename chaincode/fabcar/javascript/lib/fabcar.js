/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');
const { json } = require('stream/consumers');

class FabCar extends Contract {

    //1. initledger
    //2. writeData
    //3. readData

    async initLedger (ctx) {
        await ctx.stub.putState("test","hello-world")
        return "success"
    }

    async writeJsonData(ctx, key, value){
        let jsonValue  = JSON.parse(value);
        console.log("***************************",jsonValue);
        await ctx.stub.putState(key,Buffer.from(JSON.stringify(jsonValue)));
        return Buffer.from(JSON.stringify(jsonValue));
    }

    async writeData (ctx,key, value) {
        ctx.stub.putState(key,value)
        return value    
    }
    
    async readJsonData(ctx,key) {
        var response =  await ctx.stub.getState(key);
        response = response.toString("utf-8");
        return JSON.stringify(response);
    }

    async readData(ctx,key) {
        var response =  await ctx.stub.getState(key);
        return response.toString();
    }
    
    
}

module.exports = FabCar;
