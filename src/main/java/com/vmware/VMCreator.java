package com.vmware;

import com.vmware.connection.Connection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.vmware.vm.VMCreate;

/**
 * Created by mghuywaron on 12/23/2015.
 */
@Component
public class VMCreator extends VMCreate {

    @Autowired
    public VMCreator(Connection connection) {
        super();
        setConnection(connection);
    }


    public Boolean createVm(String dataCenterName, String vmName, String hostName) {
        setDataCenterName(dataCenterName);
        setVirtualMachineName(vmName);
        setHostname(hostName);
        try {
            connect();
            run();
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}
