import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-performance-monitor-tool',
  templateUrl: './performance-monitor-tool.component.html',
  styleUrls: ['./performance-monitor-tool.component.css']
})
export class PerformanceMonitorToolComponent implements OnInit {
  cpuUsage: string = 'Loading';
  memoryUsage: string = 'Loading';
  networkSpeed: string = 'Loading';
  pageLoadTime: string = 'Loading';

  ngOnInit() {
    setInterval(() => {
      const perf = performance as any; // Cast to access memory

      // Simulated CPU usage
      const cpu = performance.now() % 100;
      this.cpuUsage = cpu.toFixed(2);

      // Simulated memory usage
      if (perf.memory) {
        const used = perf.memory.usedJSHeapSize;
        const limit = perf.memory.jsHeapSizeLimit;
        const memPercent = (used / limit) * 100;
        this.memoryUsage = memPercent.toFixed(2);
      } else {
        this.memoryUsage = 'Unavailable';
      }

      // Simulated network speed
      this.networkSpeed = (Math.random() * 100).toFixed(2);

      // Real page load time
      const nav = performance.timing;
      const loadTime = nav.loadEventEnd - nav.navigationStart;
      this.pageLoadTime = isNaN(loadTime) ? 'Calculating' : loadTime.toString();

    }, 1000);
  }
}
