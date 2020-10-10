import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(App);
  });

  it('enterNum changes running total', () => {
    // const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  });

  it('adding numbers 1 + 4 = 5', () => {
    wrapper.vm.previousTotal = 1;
    wrapper.vm.add('4');
    expect(wrapper.vm.runningTotal).to.equal(5);
  });

  it('adding numbers 100 + 538 = 638', () => {
    wrapper.vm.previousTotal = 100;
    wrapper.vm.add('538');
    expect(wrapper.vm.runningTotal).to.equal(638);
  });

  it('should subtract 7 - 4 = 3', () => {
    wrapper.vm.previousTotal = 7;
    wrapper.vm.subtract('4');
    expect(wrapper.vm.runningTotal).to.equal(3);
  });

  it('should subtract 80 - 400 = -320', () => {
    wrapper.vm.previousTotal = 80;
    wrapper.vm.subtract('400');
    expect(wrapper.vm.runningTotal).to.equal(-320);
  });

  it('should multiply 3 * 5 = 15', () => {
    wrapper.vm.previousTotal = 3;
    wrapper.vm.multiply('5');
    expect(wrapper.vm.runningTotal).to.equal(15);
  });

  it('should multiply 3 * 5 = 15', () => {
    wrapper.vm.previousTotal = 3;
    wrapper.vm.multiply('5');
    expect(wrapper.vm.runningTotal).to.equal(15);
  });

  it('should divide 21 / 7 = 3', () => {
    wrapper.vm.previousTotal = 21;
    wrapper.vm.divide('7');
    expect(wrapper.vm.runningTotal).to.equal(3);
  });

  it('should divide 1024 / 4 = 256', () => {
    wrapper.vm.previousTotal = 1024;
    wrapper.vm.divide('4');
    expect(wrapper.vm.runningTotal).to.equal(256);
  });

  it("should concatenate multiple number clicks", () => {
    wrapper.vm.numberClick('9');
    wrapper.vm.numberClick('5');
    wrapper.vm.numberClick('7');
    expect(wrapper.vm.runningTotal).to.equal(957);
  });

  it("should chain clicks together", () => {
    wrapper.vm.numberClick('3');
    wrapper.vm.operatorClick("+");
    wrapper.vm.numberClick('9');
    expect(wrapper.vm.previousOperator).to.equal("+");
    wrapper.vm.operatorClick("=");
    expect(wrapper.vm.runningTotal).to.equal(12);
  });

  it("should chain multiple operators clicks together", () => {
    wrapper.vm.numberClick('3');
    wrapper.vm.operatorClick("+");
    wrapper.vm.numberClick('9');
    wrapper.vm.operatorClick("+");
    wrapper.vm.numberClick('8');
    expect(wrapper.vm.previousOperator).to.equal("+");
    wrapper.vm.operatorClick("*");
    wrapper.vm.numberClick('5');
    expect(wrapper.vm.previousOperator).to.equal("*");
    wrapper.vm.operatorClick("=");
    expect(wrapper.vm.runningTotal).to.equal(100);
  });

  it("should clear the display on c click", () => {
    wrapper.vm.numberClick('3');
    wrapper.vm.operatorClick("+");
    wrapper.vm.numberClick('9');
    wrapper.vm.operatorClick("=");
    wrapper.vm.clearClick();
    expect(wrapper.vm.runningTotal).to.equal(0);
    expect(wrapper.vm.previousTotal).to.equal(12);
  });


})
