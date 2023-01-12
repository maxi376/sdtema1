import { Component, OnInit ,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-dev',
  templateUrl: './add-edit-dev.component.html',
  styleUrls: ['./add-edit-dev.component.css']
})
export class AddEditDevComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() dev:any;
  DeviceId:string;
  UsermId:string;
  DeviceDescription:string;
  DeviceAddress:string;
  DeviceMaxHEnergyConsumption:string;

  UsermsList:any=[];

  ngOnInit(): void {
    this.DeviceId=this.dev.DeviceId;
    this.UsermId=this.dev.UsermId;
    this.DeviceDescription=this.dev.DeviceDescription;
    this.DeviceAddress=this.dev.DeviceAddress;
    this.DeviceMaxHEnergyConsumption=this.dev.DeviceMaxHEnergyConsumption;
  }

  loadUsermList(){
    this.service.getAllUsermNames().subscribe((data:any)=>{
      this.UsermsList=data;

      this.DeviceId=this.dev.DeviceId;
      this.UsermId=this.dev.UsermId;
      this.DeviceDescription=this.dev.DeviceDescription;
      this.DeviceAddress=this.dev.DeviceAddress;
      this.DeviceMaxHEnergyConsumption=this.dev.DeviceMaxHEnergyConsumption;
    });
  }

  addDevice(){
    var val = {DeviceId:this.DeviceId,
              UsermId:this.UsermId,
              DeviceDescription:this.DeviceDescription,
              DeviceAddress:this.DeviceAddress,
              DeviceMaxHEnergyConsumption:this.DeviceMaxHEnergyConsumption};

    this.service.addDevice(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateDevice(){
    var val = {DeviceId:this.DeviceId,
      UsermId:this.UsermId,
      DeviceDescription:this.DeviceDescription,
      DeviceAddress:this.DeviceAddress,
      DeviceMaxHEnergyConsumption:this.DeviceMaxHEnergyConsumption};

    this.service.updateDevice(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
