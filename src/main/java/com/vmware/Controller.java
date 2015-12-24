package com.vmware;

import com.vmware.vim25.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @Autowired
    private VMotioner vMotioner;


    @RequestMapping(value = "/createVM", method = RequestMethod.POST)
    public String createVM(@RequestParam("datacenterName") String dataCenterName,
                           @RequestParam("vmName") String vmName,
                           @RequestParam("hostName") String hostName) throws Exception{
        Boolean success = vmCreator.createVm(dataCenterName, vmName, hostName);
        return success.toString();
    }

    @RequestMapping(value = "/{entity}/names")
    public String getProperties(@PathVariable String entity) throws InvalidStateFaultMsg, InsufficientResourcesFaultFaultMsg, TaskInProgressFaultMsg, DuplicateNameFaultMsg, ConcurrentAccessFaultMsg, InvalidNameFaultMsg, FileFaultFaultMsg, InvalidCollectorVersionFaultMsg, InvalidPropertyFaultMsg, InvalidDatastoreFaultMsg, VmConfigFaultFaultMsg, RuntimeFaultFaultMsg {
        List<String> results = vcCollector.collectNames(entity);
        for (String result : results) {
            System.out.println(result);
        }
        return "success";
    }

    @RequestMapping(value = "/vmotion")
    public String moveVm(@RequestParam("targetHost") String targetHost,
                         @RequestParam("sourceHost") String sourceHost,
                         @RequestParam("vmName") String vmName
                         ) throws InvalidStateFaultMsg, InsufficientResourcesFaultFaultMsg, TaskInProgressFaultMsg, DuplicateNameFaultMsg, ConcurrentAccessFaultMsg, InvalidNameFaultMsg, FileFaultFaultMsg, InvalidCollectorVersionFaultMsg, InvalidPropertyFaultMsg, InvalidDatastoreFaultMsg, VmConfigFaultFaultMsg, RuntimeFaultFaultMsg, TimedoutFaultMsg, MigrationFaultFaultMsg {
        return vMotioner.moveVM(vmName,targetHost, "somtr", sourceHost);

    }




}
