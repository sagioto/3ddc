package com.vmware;

import com.vmware.vim25.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by mghuywaron on 12/23/2015.
 */
@RestController
public class Controller {

    @Autowired
    private VMCreator vmCreator;

    @Autowired
    private VcCollector vcCollector;


    @RequestMapping(value = "/createVM", method = RequestMethod.POST)
    public String createVM(@RequestParam("datacenterName") String dataCenterName,
                           @RequestParam("vmName") String vmName,
                           @RequestParam("hostName") String hostName) throws Exception{
        Boolean success = vmCreator.createVm(dataCenterName, vmName, hostName);
        return success.toString();
    }

    @RequestMapping(value = "/collect")
    public String getProperties() throws InvalidStateFaultMsg, InsufficientResourcesFaultFaultMsg, TaskInProgressFaultMsg, DuplicateNameFaultMsg, ConcurrentAccessFaultMsg, InvalidNameFaultMsg, FileFaultFaultMsg, InvalidCollectorVersionFaultMsg, InvalidPropertyFaultMsg, InvalidDatastoreFaultMsg, VmConfigFaultFaultMsg, RuntimeFaultFaultMsg {
        List<String> results = vcCollector.collectVMs();
        for (String result : results) {
            System.out.println(result);
        }
        return "success";
    }




}
