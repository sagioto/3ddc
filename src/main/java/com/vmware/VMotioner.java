package com.vmware;

import com.vmware.connection.Connection;
import com.vmware.vim25.*;
import com.vmware.vm.VMotion;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * Created by mghuywaron on 12/24/2015.
 */
@Component
public class VMotioner extends VMotion {

    @Autowired
    public VMotioner(Connection vcConnection) {
        super();
        setConnection(vcConnection);
    }

    public String moveVM(String vmName, String targetHost, String targetDS, String sourceHost) throws InsufficientResourcesFaultFaultMsg, MigrationFaultFaultMsg, InvalidStateFaultMsg, TimedoutFaultMsg, FileFaultFaultMsg, InvalidCollectorVersionFaultMsg, InvalidPropertyFaultMsg, InvalidDatastoreFaultMsg, VmConfigFaultFaultMsg, RuntimeFaultFaultMsg {
        setVmName(vmName);
        setTargetHost(targetHost);
        setTargetDS(targetDS);
        setSourceHost(sourceHost);
        run();
        return "success";
    }
}
