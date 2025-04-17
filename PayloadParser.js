function parseUplink(device, payload)
{
    // Obtener payload como JSON
    const jsonPayload = payload.asJsonObject();
    Object.keys(jsonPayload).forEach(function(key){
        env.log(key,jsonPayload[key])
    })

    // No se puede deserializar el payload como json, salir.
    if (!jsonPayload) { return; }

    // Procesar JSON de EZE GEN1 (hasta 200 registros por sensor por call)


    //----------------------------------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------

        //variables SW Resina ABAJO
        var res1 = device.endpoints.byAddress(1);
        var res2 = device.endpoints.byAddress(2);
        var res3 = device.endpoints.byAddress(3);
        var res4 = device.endpoints.byAddress(4);

        var tiempoUnix = jsonPayload.timestamp;
        var fecha = new Date(tiempoUnix * 1000);
        var timestamp = fecha.toISOString();
        env.log("LA FECHA ES ----->   ",timestamp);

/*-------------------------------------------------------------------------------------------------------------------

SCRIPT SW RESINAS  SCRIPT SW RESINAS  SCRIPT SW RESINAS  SCRIPT SW RESINAS  SCRIPT SW RESINAS  SCRIPT SW RESINAS  

-------------------------------------------------------------------------------------------------------------------*/
// Sentencia NODE-RED Para todos los endpoints


if (jsonPayload.ser == "RUT240R"){
            const datos = jsonPayload;
            var data = jsonPayload.data;

            const datosSeparados = jsonPayload.val.split(',');
            datosSeparados.forEach(dato => {
            env.log(dato.trim());
            });
            for (let i = 0; i < datosSeparados.length; i++) {
                    env.log("Valor  --> ",[i],"--->  ",datosSeparados[i]);
            }
            var dato1 =parseInt(datosSeparados[0]);
            var dato2 =parseInt(datosSeparados[1]);
            var dato3 =parseInt(datosSeparados[2]);
            var dato4 =parseInt(datosSeparados[3]);
            
          
            env.log("Time  --> ",timestamp);

            res1.updateWeightSensorStatus(dato1,timestamp);
            env.log("Valor 1 --> ",dato1);
            
            res2.updateWeightSensorStatus(dato2,timestamp);
            env.log("Valor 2 --> ",dato2);

            res3.updateWeightSensorStatus(dato3,timestamp);
            env.log("Valor 3 --> ",dato3);

            res4.updateWeightSensorStatus(dato4,timestamp);
            env.log("Valor 4 --> ",dato4);
             
                                                         
    }



  
}