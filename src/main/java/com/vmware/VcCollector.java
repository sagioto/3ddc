package com.vmware;

import com.vmware.general.PropertyCollector;
import com.vmware.vim25.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Created by mghuywaron on 12/24/2015.
 */
@Component
public class VcCollector extends PropertyCollector {

    private final String VMS = "VirtualMachine";
    private final String DCS = "DataCenter";
    private List<String> resultSet;

    private String activeType;

    @Autowired
    public VcCollector(VCConnection connection) {
        super();
        resultSet = new ArrayList<>();
        setConnection(connection);
        setExtension("propertycollector");
        setMaxObjects(String.valueOf(1000));
        setNoofTasks(String.valueOf(3));
    }

    public List<String> collect() {
        try {
            connect();
            main();
            return resultSet;
        } catch (Exception e) {
            e.printStackTrace();
            return Collections.emptyList();
        }
    }

    public List<String> collectDCs() {
        activeType = DCS;
        return collect();
    }

    public List<String> collectVMs() {
        activeType = VMS;
        return collect();
    }

    @Override
    public void callCreatePropertyCollectorEx() throws RuntimeFaultFaultMsg, InvalidPropertyFaultMsg {
        ManagedObjectReference var1 = this.vimPort.createPropertyCollector(this.serviceContent.getPropertyCollector());
        PropertySpec var2 = new PropertySpec();
        var2.setAll(false);
        var2.getPathSet().add("name");
        var2.setType(activeType);
        ArrayList var3 = new ArrayList();
        var3.add(var2);
        ObjectSpec var4 = new ObjectSpec();
        var4.setObj(this.serviceContent.getRootFolder());
        var4.setSkip(false);
        var4.getSelectSet().addAll(this.buildFullTraversal());
        ArrayList var5 = new ArrayList(0);
        var5.add(var4);
        PropertyFilterSpec var6 = new PropertyFilterSpec();
        var6.getPropSet().addAll(var3);
        var6.getObjectSet().addAll(var5);
        ArrayList var7 = new ArrayList();
        var7.add(var6);
        RetrieveOptions var8 = new RetrieveOptions();
        RetrieveResult var9 = this.vimPort.retrievePropertiesEx(var1, var7, var8);
        List var10 = var9.getObjects();

        for(int var11 = 0; var11 < var10.size(); ++var11) {
            List<DynamicProperty> entityName = ((ObjectContent) var10.get(var11)).getPropSet();
            for (DynamicProperty property : entityName) {
                resultSet.add(property.getVal().toString());
            }
        }

        this.vimPort.destroyPropertyCollector(var1);
    }
}
